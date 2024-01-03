window.addEventListener('load', function() {
      // Находим все дочерние элементы у тега с классом 'container'
      var containerChildren = document.querySelectorAll('.container > *');

    setInterval(function() {
  
      // Пример: Добавим класс 'item' к каждому дочернему элементу (если его нет)
      containerChildren.forEach(function(child) {
        if (!child.classList.contains('item')) {
          child.classList.add('item');
        }
      });
      
      // Удаляем класс 'target' у всех элементов
      containerChildren.forEach(function(item) {
        item.classList.remove('target');
      });
  
      // Выбираем случайный элемент и добавляем ему класс 'target'
      var randomIndex = Math.floor(Math.random() * containerChildren.length);
      containerChildren[randomIndex].classList.remove('item'); // Убираем предыдущий класс 'item'
      containerChildren[randomIndex].classList.add('target'); // Добавляем класс 'target'
    }, 1500); // Интервал в миллисекундах (в данном случае, 1500 миллисекунды = 1.5 секунды)
  });
  