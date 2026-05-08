const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Challenge</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #0f172a;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }

          .container {
            text-align: center;
            background: #1e293b;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 0 15px rgba(0,0,0,0.4);
          }

          h1 {
            color: #38bdf8;
          }

          p {
            font-size: 18px;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>🚀 DevOps Engineer Challenge</h1>

          <p>Application deployed successfully using:</p>

          <p>✅ Node.js</p>
          <p>✅ Docker</p>
          <p>✅ Terraform</p>
          <p>✅ GitHub Actions CI/CD</p>
          <p>✅ AWS EC2</p>

          <br>

          <p>Prepared by Samuel Olayinka Victor</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});