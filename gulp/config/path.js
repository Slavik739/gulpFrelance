// получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const builderFolder = `./dist`;
const srcFolder =`./src`;

export const path = {
	build: {
		files:`${builderFolder}/files`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`
	},
	clean: builderFolder,
	builderFolder: builderFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}