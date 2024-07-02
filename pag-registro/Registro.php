<?php
include_once('../config.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['firstname'];
    $sobrenome = $_POST['lastname'];
    $email = $_POST['email'];
    $telefone = $_POST['number'];
    $senha = $_POST['password'];
    $confirmSenha = $_POST['confirm-password'];
    $sexo = $_POST['gender'];

    if($senha !== $confirmSenha){
        echo '<script>document.getElementById("passwordError").textContent = "As senhas não coincidem.";</script>';
    } else {
        $query = "INSERT INTO usuarios (nome, sobrenome, email, telefone, sexo, senha) VALUES ('$nome', '$sobrenome', '$email', '$telefone', '$sexo', '$senha')";
        $result = mysqli_query($conexao, $query);
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/Registro.css">
    <title>Registro</title>
</head>
<body>
    <div class="container">
        <div class="form-image">
            <img src="./assets/image-registerpag.svg" alt="">
        </div>
        <div class="form">
            <div class="form-header">
                <div class="title">
                    <h1>Cadastre-se!</h1>
                </div>
                <div class="login-button">
                    <a href="http://localhost/CopyText/pag-login/Login.php">Entrar</a>
                </div>
            </div>
            <form action="Registro.php" method="POST">
                <div class="input-group">
                    <div class="input-box">
                        <label for="firstname">Primeiro Nome:</label>
                        <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required>
                    </div>
                    <div class="input-box">
                        <label for="lastname">Ultimo Nome:</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Digite seu ultimo nome" required>
                    </div>
                    <div class="input-box">
                        <label for="email">E-mail:</label>
                        <input id="email" type="email" name="email" placeholder="seuemail@email.com" required>
                    </div>
                    <div class="input-box">
                        <label for="number">Telefone:</label>
                        <input id="number" type="tel" name="number" pattern="[0-9]{12}" maxlength="12" placeholder="(xx) xxxx-xxxxx" required>
                    </div>
                    <div class="input-box">
                        <label for="password">Sua senha:</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha:" required>
                    </div>
                    <div class="input-box">
                        <label for="confirm-password">Confirme sua senha:</label>
                        <input id="confirm-password" type="password" name="confirm-password" placeholder="Digite sua senha:" required>
                    </div>
                </div>
                <div id="errorParagraph"><p id="passwordError" style="color: red;"></p></div>
                <div class="gender-inputs">
                    <div class="gender-title">
                        <h6>Gênero</h6>
                    </div>
                    <div class="gender-group">
                        <div class="gender-input">
                            <input type="radio" id="female" value="feminino" name="gender">
                            <label for="female">Feminino</label>
                        </div>
                        <div class="gender-input">
                            <input type="radio" id="male" value="masculino" name="gender">
                            <label for="male">Masculino</label>
                        </div>
                        <div class="gender-input">
                            <input type="radio" id="others" value="outros" name="gender">
                            <label for="others">Outros</label>
                        </div>
                        <div class="gender-input">
                            <input type="radio" id="none" value="prefiro nao dizer" name="gender">
                            <label for="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>
                <div class="continue-button">
                    <Button type="submit" name="submit">Continua</Button>
                </div>
            </form>
        </div>
    </div>
</body>
<script src="script/validator.js"></script>
</html>