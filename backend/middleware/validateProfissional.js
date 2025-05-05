class ValidateProfissional {
  static validate(req, res, next) {
    const { nome, profissao, salario, setor, cidade, estado, matricula } = req.body;

    if (!nome || !profissao || !salario || !setor || !cidade || !estado || !matricula) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios, incluindo matrícula.' });
    }

    const salarioNumber = Number(salario);
    if (isNaN(salarioNumber) || salarioNumber < 0) {
      return res.status(400).json({ error: 'Salário deve ser um número positivo.' });
    }

    if (typeof estado !== 'string' || estado.length !== 2) {
      return res.status(400).json({ error: 'Estado deve ter exatamente 2 letras.' });
    }

    next();
  }
}

module.exports = ValidateProfissional;
