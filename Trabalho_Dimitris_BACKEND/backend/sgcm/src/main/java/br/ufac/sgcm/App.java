package br.ufac.sgcm;

import java.sql.Connection;
import java.util.List;

import br.ufac.sgcm.dao.ConexaoDB;
import br.ufac.sgcm.dao.EspecialidadeDao;
import br.ufac.sgcm.dao.ProfissionalDao;
import br.ufac.sgcm.model.Especialidade;
import br.ufac.sgcm.model.Profissional;
import br.ufac.sgcm.model.Unidade;

public class App {
    public static void main(String[] args) {
        

        Unidade u1 = new Unidade();
        u1.setId(1L);
        u1.setNome("Pronto Atendimento");
        u1.setEndereco("Av. Rocha Viana");

        Especialidade e1 = new Especialidade();
        e1.setNome("Otorrino");
        e1.setId(11L);
        

        Connection instancia = ConexaoDB.getConexao();
        

        EspecialidadeDao eDao = new EspecialidadeDao();
        
    
        Profissional pDimitris = new Profissional();
        pDimitris.setId(9L);
        pDimitris.setEmail("dimitrisc47@gmail.com");
        pDimitris.setNome("Dimitris Targino Calixto");
        pDimitris.setRegistro("CRM/AC 008");
        pDimitris.setEspecialidade(e1);
        System.out.println("ID ESPECIALIDADE:"+pDimitris.getEspecialidade().getId());
        pDimitris.setUnidade(u1);
        pDimitris.setTelefone("(68) 9 9229-5438");
        ProfissionalDao pDao = new ProfissionalDao(); 
        pDao.delete(pDimitris);
        
    }
}
