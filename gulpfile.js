// основной модуль
import gulp from 'gulp'
// импорт путей
import { path } from './gulp/config/path.js'
//импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from "./gulp/tasks/reset.js";

//передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

//наблюдать за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
}

//построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);

// выполнение сценария по умолчанию
gulp.task('default', dev);