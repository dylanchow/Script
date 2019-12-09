var body = $response.body;
body = '\/*\n@supported 56BC556BB8CC\n*\/\n' + body;

$done(body);
