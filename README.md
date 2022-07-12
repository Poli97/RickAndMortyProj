# RickAndMortyProj

Cloud Academy Mobile Assignment.
The project is created with **React Native 0.65.1** (**React 17.0.2**). It has been initialized using a TypeScript template (**TypeScript 4.7.4**).

[<img src="/gitImages/screen1.png" width="250"/>](Home screen)
[<img src="/gitImages/screen2.png" width="250"/>](Detail Screen)

## Libraries

- **React Navigation 6**: for navigation.
- **rickmortyapi**: for interfaces only (not server calls, which are made with **fetch** API).

## Project structure

```
📦src
 ┣ 📂communications
 ┃ ┣ 📂chapters
 ┃ ┣ 📂characters
 ┃ ┣ 📂locations
 ┣ 📂components
 ┣ 📂core
 ┃ ┗ 📂interfaces
 ┣ 📂routes
 ┣ 📂screens
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂components
 ┃ ┗ 📂home
 ┃ ┃ ┣ 📂components
 ┗ 📂theme
```

- **communications:** contains all the server calls, divided by corresponding functionality (**chapters**, **characters**, **locations**).
- **components**: contains all the general UI components shared by the app.
- **core**: contain the **core** stuff of the app, like the **interfaces** folder that contains the shared interfaces.
- **routes**: folder to store and handle the navigators.
- **screens**: contains the different screens of the app. For each screen a subfolder is created (**home**, **detail**), containing the main .tsx file and a folder (**components**) with the screen specific components only.
- **theme**: folder to store generic graphical infos (like shared colours, device size infos...).
