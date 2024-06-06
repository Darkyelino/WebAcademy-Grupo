package br.ufac.sgcm;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import br.ufac.sgcm.dao.UsuarioDao;
import br.ufac.sgcm.model.Usuario;

@WebServlet("/usuarioservlet")
public class UsuarioServlet extends HttpServlet {
    
    private static final long serialVersionUID = 1L;

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String nomeUsuario = req.getParameter("usuario");
        String senhaUsuario = req.getParameter("senha");
        UsuarioDao uDao = new UsuarioDao();
        Usuario login = uDao.get(nomeUsuario, senhaUsuario);

        if (login != null && login.getNomeUsuario() != null) {
            res.sendRedirect("index.jsp");
        } else {
            res.sendRedirect("login.jsp?errorMessage=Nome de usuário ou senha inválidos");
        }
    }
}
