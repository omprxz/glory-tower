<?php
declare(strict_types=1);

$configPath = __DIR__ . '/config.php';
$config = is_file($configPath) ? require $configPath : require __DIR__ . '/config.sample.php';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'] ?? [], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['success' => false, 'message' => 'Method not allowed.']); exit; }

$raw = file_get_contents('php://input') ?: '';
$input = json_decode($raw, true);
if (!is_array($input)) { $input = $_POST; }
$clean = static function ($value): string { return trim(strip_tags((string) $value)); };
$name = $clean($input['name'] ?? '');
$phone = preg_replace('/\D+/', '', (string) ($input['phone'] ?? ''));
$email = $clean($input['email'] ?? '');
$message = $clean($input['message'] ?? '');
$type = $clean($input['type'] ?? 'contact');
$honeypot = $clean($input['website'] ?? '');
if ($honeypot !== '') { echo json_encode(['success' => true, 'message' => 'Thank you.']); exit; }
if ($name === '' || !preg_match('/^[6-9][0-9]{9}$/', $phone) || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    http_response_code(422); echo json_encode(['success' => false, 'message' => 'Please provide a valid name, Indian phone number and email.']); exit;
}
$rateFile = sys_get_temp_dir() . '/glory-form-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$now = time(); $history = is_file($rateFile) ? json_decode((string) file_get_contents($rateFile), true) : [];
$history = is_array($history) ? array_filter($history, static fn ($time) => $time > $now - 3600) : [];
if (count($history) >= 5) { http_response_code(429); echo json_encode(['success' => false, 'message' => 'Please try again later.']); exit; }
$history[] = $now; file_put_contents($rateFile, json_encode(array_values($history)), LOCK_EX);
$subject = 'The Glory Towers enquiry - ' . ($type ?: 'contact');
$body = "Name: {$name}\nPhone: {$phone}\nEmail: {$email}\nType: {$type}\nMessage: {$message}";
$recipient = $config['recipient_email'] ?? '';
$sender = $config['sender_email'] ?? '';
if ($recipient === '' || !filter_var($recipient, FILTER_VALIDATE_EMAIL) || !filter_var($sender, FILTER_VALIDATE_EMAIL)) {
    http_response_code(503); echo json_encode(['success' => false, 'message' => 'The enquiry service is not configured.']); exit;
}
$headers = "From: {$sender}\r\nReply-To: " . ($email ?: $sender) . "\r\n";
$sent = mail($recipient, str_replace(["\r", "\n"], '', $subject), $body, $headers);
if (!$sent) { http_response_code(502); echo json_encode(['success' => false, 'message' => 'Unable to send your enquiry right now.']); exit; }
echo json_encode(['success' => true, 'message' => 'Thank you. We will be in touch shortly.']);
