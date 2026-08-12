document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const menuToggle = document.querySelector('.menu-toggle');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      nav.classList.toggle('is-open');
    });
  }

  const taskForm = document.querySelector('.task-form');
  const taskInput = document.querySelector('#new-task');
  const taskList = document.querySelector('.task-list');

  if (taskForm && taskInput && taskList) {
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const taskText = taskInput.value.trim();
      if (!taskText) {
        return;
      }

      const listItem = document.createElement('li');
      listItem.className = 'task-item';

      listItem.innerHTML = `
        <label>
          <input type="checkbox" />
          <span>${taskText}</span>
        </label>
      `;

      taskList.appendChild(listItem);
      taskInput.value = '';
    });
  }

  const focusToggle = document.querySelector('#focus-mode-toggle');
  if (focusToggle) {
    focusToggle.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
    });
  }
});
