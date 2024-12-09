<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/RedefinirSenha.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <div class="form-image">
            <img src="./assets/undraw_forgot_password_re_hxwm.svg" alt="">
        </div>
        <div class="form">
            <form action="" method="">
                <div class="form-header">
                    <div class="title">
                        <h1>Recupere sua senha!</h1>
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-box">
                        <label for="email">Digite o e-mail associado a sua conta:</label>
                        <input id="email" type="email" name="email" placeholder="seuemail@email.com" required>
                    </div>
                </div>
                <!-- <div id="errorParagraph"><p id="passwordError" style="color: red;"></p></div> -->
                 <div class="SaveAcessAndRecoveryPassowrd">
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