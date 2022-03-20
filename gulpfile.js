// основной модуль
import gulp from 'gulp'
// импорт путей
import { path } from './gulp/config/path.js'
//импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";

//передаем значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

//наблюдать за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks =gulp.parallel(copy, html)

//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, watcher);

// выполнение сценария по умолчанию
gulp.task('default', dev);