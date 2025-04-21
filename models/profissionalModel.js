class Profissional {
    constructor({ matricula, nome, profissao, salario, setor, cidade, estado }) {
      this.matricula = matricula;
      this.nome = nome;
      this.profissao = profissao;
      this.salario = salario;
      this.setor = setor;
      this.cidade = cidade;
      this.estado = estado;
    }
  }
  
  module.exports = Profissional;