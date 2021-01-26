const cards = [
    {
      id: 'card-1',
      title: 'Сделать РГР',
    },
    {
      id: 'card-2',
      title: 'Сдать РГР',
    },
    {
      id: 'card-3',
      title: 'Подготовиться к зачёту',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'К выполнению',
        cards,
      },
      'list-2': {
        id: 'list-2',
        title: 'Выполняется',
        cards: [],
      }, 
      
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;
  