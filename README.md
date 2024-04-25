# Duoc-Maps
Proyecto que consta de un mapa 360 de la sede Duoc Uc San Bernardo

_____________________________________________________________________________________
| Package                |                  Versión                                  |
|------------------------|-----------------------------------------------------------|
| Angular CLI            | 12.1.1                                                    |
| Node                   | 14.15.0                                                   |
| Package Manager        | npm 6.14.8                                                |
____________________________________________________________________________________

# Tabla de dependencias:
____________________________________________________________
| Package                   |               Versión         |
|---------------------------|-------------------------------|
| @angular-devkit/architect | 0.1201.1 (cli-only)           |
| @angular-devkit/core      | 12.1.1 (cli-only)             |
| @angular-devkit/schematics| 12.1.1 (cli-only)             |
| @schematics/angular       | 12.1.1 (cli-only)             |
____________________________________________________________

# IONIC

__________________________________________________________________
| Package                   |               Ionic Versión         |
|---------------------------|-------------------------------------|
|   Ionic                   |  7.2.0                              |
___________________________________________________________________

# Instalación de dependencias

nvm install 14.15.0
nvm use 14.15.0
npm i @angular/core@12.1.1
npm install
npm install -g @ionic/cli
npm install --save @ionic-native/core

# Pasos Para la Ejecución del Proyecto
1. Descarga Del Proyecto: Se puede descargar el proyecto desde el archivo Zip o clonandolo.
2. Instalar Node Modules: dentro de la carpeta " Proyecto DuocUCMaps" ejecutar " npm install ".
3. Ejecutar proyecto:* ionic serve (ejecuta en el navegador).
                     * ionic cordova run [platform] (ejecutar para android o ios)

# Solución Posibles errores
Error de ejecución de " ionic serve " con node 14.15.0 = si aparece un error "  [ng] throw new Error("The target entry-point \"" + invalidTarget.entryPoint.name + "\" has missing dependencies:\n" +
                                                                                [ng] ^
                                                                                [ng] Error: The target entry-point "@ionic-native/in-app-browser" has missing dependencies:
                                                                                [ng]  - @ionic-native/core "
se debe ejecutar " npm install --save @ionic-native/core "


# Esperamos que este proyecto sea útil para la comunidad Duoc UC.
