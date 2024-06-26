<?php
    if(isset($_POST['submit']))
    {
        // print_r($_POST['firstname']);
        // print_r($_POST['lastname']);
        // print_r($_POST['email']);

        include_once('config.php');
        $nome = $_POST['firstname'];
        $sobrenome = $_POST['lastname'];
        $email = $_POST['email'];
        $telefone = $_POST['number'];
        $senha = $_POST['password'];
        $sexo = $_POST['gender'];

        $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,sobrenome,email,telefone,sexo,senha) VALUES ('$nome','$sobrenome','$email','$telefone','$sexo','$senha')");
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
            <form action="Registro.php" method="POST">
                <div class="form-header">
                    <div class="title">
                        <h1>Cadastre-se!</h1>
                    </div>
                    <div class="login-button">
                        <button><a href="#">Entrar</a></button>
                    </div>
                </div>
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
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxxx" required>
                    </div>
                    <div class="input-box">
                        <label for="password">Sua senha:</label>
                        <input id="password" type="tel" name="password" placeholder="Digite sua senha:" required>
                    </div>
                    <div class="input-box">
                        <label for="password">Confirme sua senha:</label>
                        <input id="password" type="tel" name="confirm-password" placeholder="Digite sua senha:" required>
                    </div>
                </div>
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
</html>