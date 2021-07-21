export {};
const fs = require("fs"); // модуль для работы с файловой системой
const path = require("path"); // модуль для преобразования пути
const minimist = require("minimist"); // модуль для преобразования строки аргументов в объект

const args = minimist(process.argv);

const srcPath = [__dirname, ".."]; // путь до папки src текущего проекта
const arrPath = args.path.split("/"); // разбиваем путь из аргумента командной строки на массив
const componentName = arrPath[arrPath.length - 1]; // последний элемент - название компонента

// создание директорий из аргумента (при необходимости)
const currentArray = [];
arrPath.forEach((element) => {
  currentArray.push(element);
  const currentResolvePath = path.resolve(...srcPath, ...currentArray);
  if (!fs.existsSync(currentResolvePath)) {
    // проверка - существует такая директория или нет?
    fs.mkdirSync(currentResolvePath); // если нет, то создаем новую
  }
});

const componentPath = [...srcPath, ...arrPath];

// создание компонента
const componentCode = `import React, {Component} from 'react';
import styles from './${componentName}.module.scss';
import RootStore from "stores/RootStore";
import { inject, observer } from "mobx-react";

@observer
class ${componentName} extends Component<RootStore, any> {
  render() {
    return (
      <div className={styles.${componentName}}>
      </div>
    );
  }
}

export default ${componentName};`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.tsx`),
  componentCode
);

// создание индексного файла
const indexCode = `export {default} from './${componentName}';`;
fs.writeFileSync(path.resolve(...componentPath, "index.ts"), indexCode);

// создание файла стилей
const styleCode = `@import "styles/library";
@import "styles/mixins";

.${componentName} {
}`;
fs.writeFileSync(
  path.resolve(...componentPath, `${componentName}.module.scss`),
  styleCode
);
