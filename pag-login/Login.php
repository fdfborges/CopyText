<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/Login.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="form-image">
            <img src="./assets/image-registerpag.svg" alt="">
        </div>
        <div class="form">
            <form action="testLogin.php" method="POST">
                <div class="form-header">
                    <div class="title">
                        <h1>Entre em sua conta!</h1>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-box">
                        <label for="email">E-mail:</label>
                        <input id="email" type="email" name="email" placeholder="seuemail@email.com" required>
                    </div>
                    <div class="input-box">
                        <label for="password">Sua senha:</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha:" required>
                    </div>
                </div>
                <!-- <div id="errorParagraph"><p id="passwordError" style="color: red;"></p></div> -->
                 <div class="SaveAcessAndRecoveryPassowrd">
                    <div class="SaveAcess">
                       <label for="">Lembrar-me</label> 
                       <input type="checkbox">  
                    </div>
                    <div class="RecoveryPassword">
                       <a href="">Recuperar senha</a>
                    </div>
                 </div>
                <div class="continue-button">
                    <Button type="submit" name="submit">Continua</Button>
                </div>
                <div class="likToRegistro">
                    <p>Não tem uma conta? <a href="http://localhost/CopyText/pag-registro/Registro.php">Cadastre-se!</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
<script src="script/validator.js"></script>
</html>