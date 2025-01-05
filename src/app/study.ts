//Tranformando uma lista de objetos de estado brasileiro e cidades em uma lista de objetos que cada chave da lista é a sigla do estado brasileiro.

const estadosCidades = [
    { estado: "São Paulo", sigla: "SP", cidade: "São Paulo" },
    { estado: "São Paulo", sigla: "SP", cidade: "Campinas" },
    { estado: "Rio de Janeiro", sigla: "RJ", cidade: "Rio de Janeiro" },
    { estado: "Rio de Janeiro", sigla: "RJ", cidade: "Niterói" }
  ];

  const transformarLista = (lista: { estado: string; sigla: string; cidade: string }[]) => {
    return lista.reduce((acc, item) => {
      const { sigla, cidade } = item;
  
      // Se a chave (sigla) ainda não existe, inicialize-a como um array vazio
      if (!acc[sigla]) {
        acc[sigla] = [];
      }
  
      // Adicione a cidade à lista associada à sigla
      acc[sigla].push(cidade);
  
      return acc;
    }, {} as Record<string, string[]>);
  };
  
  const resultado = transformarLista(estadosCidades);
  
  console.log(resultado);
  