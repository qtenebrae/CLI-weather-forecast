import chalk from "chalk";
import dedent from "dedent-js";

const pringError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const pringSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
  );
};

export { pringError, pringSuccess, printHelp };
