<%@ page pageEncoding="UTF-8" %>
<%@ page import="java.util.List" %>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./js/login.js" defer></script>
    <title>Login</title>
</head>
<body>
    <% if (request.getParameter("errorMessage") != null) { %>
        <script>alert("Usuário ou senha inválido");</script>
    <% } %>

    <form method="post" action="usuarioservlet">
        <label for="usuario">Usuário</label>
        <input id="usuario" type="text" name="usuario" required>
        <br>
        <label for="senha">Senha</label>
        <input id="senha" type="password" name="senha" required>
        <br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
