package br.ufac.sgcm.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.ufac.sgcm.model.Usuario;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UsuarioDao {

    private static final Logger logger = LoggerFactory.getLogger(UsuarioDao.class);

    private Connection conexao;

    public UsuarioDao() {
        conexao = ConexaoDB.getConexao();
    }

    /**
     * Recupera todos os usuários do banco de dados.
     * 
     * @return Lista de objetos Usuario.
     */
    public List<Usuario> get() {
        List<Usuario> registros = new ArrayList<>();
        String sql = "SELECT * FROM usuario";
        
        try (PreparedStatement ps = conexao.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {

            while (rs.next()) {
                Usuario registro = new Usuario();
                registro.setId(rs.getLong("id"));
                registro.setAtivo(rs.getInt("ativo"));
                registro.setNomeCompleto(rs.getString("nome_completo"));
                registro.setNomeUsuario(rs.getString("nome_usuario"));
                registro.setPapel(rs.getString("papel"));
                registro.setSenha(rs.getString("senha"));
                registros.add(registro);
            } 
        } catch (SQLException e) {
            logger.error("Erro ao recuperar todos os usuários", e);
        }

        return registros;
    }
    
    /**
     * Recupera um usuário específico baseado no nome de usuário e senha.
     * 
     * @param nomeUsuario O nome de usuário.
     * @param senhaUsuario A senha do usuário.
     * @return O objeto Usuario correspondente, ou null se não encontrado.
     */
    public Usuario get(String nomeUsuario, String senhaUsuario) {
        Usuario login = null;
        String sql = "SELECT * FROM usuario WHERE nome_usuario = ? AND senha = ?";
        
        try (PreparedStatement ps = conexao.prepareStatement(sql)) {
            ps.setString(1, nomeUsuario);
            ps.setString(2, senhaUsuario);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    login = new Usuario();
                    login.setId(rs.getLong("id"));
                    login.setNomeUsuario(rs.getString("nome_usuario"));
                    login.setNomeCompleto(rs.getString("nome_completo"));
                    login.setAtivo(rs.getInt("ativo"));
                    login.setPapel(rs.getString("papel"));
                    login.setSenha(rs.getString("senha"));
                }
            }
        } catch (SQLException e) {
            logger.error("Erro ao recuperar o usuário por nome de usuário e senha", e);
        }

        return login;
    }

    /**
     * Recupera um usuário específico baseado no ID.
     * 
     * @param id O ID do usuário.
     * @return O objeto Usuario correspondente, ou null se não encontrado.
     */
    public Usuario getId(Long id) {
        Usuario login = null;
        String sql = "SELECT * FROM usuario WHERE id = ?";
        
        try (PreparedStatement ps = conexao.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    login = new Usuario();
                    login.setId(rs.getLong("id"));
                    login.setNomeUsuario(rs.getString("nome_usuario"));
                    login.setNomeCompleto(rs.getString("nome_completo"));
                    login.setAtivo(rs.getInt("ativo"));
                    login.setPapel(rs.getString("papel"));
                    login.setSenha(rs.getString("senha"));
                }
            }
        } catch (SQLException e) {
            logger.error("Erro ao recuperar o usuário por ID", e);
        }

        return login;
    }
}
