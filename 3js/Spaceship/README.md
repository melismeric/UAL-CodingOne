## Final Project

## MIMIC LINK:https://mimicproject.com/code/ab67b347-7553-7767-15a1-e8d9415684ed
## VIDEO: https://youtu.be/8445dj53HZE
![ezgif com-gif-maker (13)](https://git.arts.ac.uk/storage/user/227/files/0759c900-5434-11ec-94a7-2819af1097b7)
![ezgif com-gif-maker (14)](https://git.arts.ac.uk/storage/user/227/files/0c6d4700-5439-11ec-8807-e197a8ebc493)

### Spaceships in the Storm

For the final project of the Coding One course, I designed a scene using three.js and shaders. 

### Three.js Objects & The Storm
In this scene, firstly I created the ground and added a concrete texture. Then I added the clouds using a cloud texture on sphere geometry and positioned them on the sky. For the lightning effect, I used point light flashing randomly. I added a raycaster to change the colors of the clouds and flashlight. I used raycasting to find out which objects in the 3d space the mouse is over. When the user touches the clouds with the mouse, the colors of the clouds and the light coming from them change randomly.  I used particles to create a rain effect. They are generated randomly to create a noise effect to make it look like real rain. There are 10 sphere lights in the scene with a striped mesh creating different shadows.

### Shaders
#### Glow Effect & Spaceship:
I wanted to use a simple glow effect for the spaceship. It creates a glow effect using normals and multiplying it with the glow intensity we declare in the uniforms. I combined a cone and a sphere to create the shape of the spaceship. Then applied the shader material to the combined mesh. Spaceship moves according to the mouse position, for the user to move it with the mouse.

#### Noise + Warping:
When I was going through the Book of Shaders I learned the warping technique of Inigo Quiles. It was mesmerizing for me, hence I wanted to use it in my scene with some modifications. I used a simple noise function generates a random number for four corners. Then it is used in the Fbm function.
```f(p) = fbm( p + fbm( p + fbm( p ) ) ) - Inigo Quiles (2002) ```
I wanted the shader to be interactive, hence I added mouse as a uniform to track its motion. `Mouse.x` and `mouse.y` is given to the Fbm function as variables to move the cloud waves up and down with the mouse.

I wanted to add this shader as an extra to my screen because I really wanted to play with it and see it on the scene. Hence in the default version, it is not visible, we need to check the 'See Clouds' checkbox to see it. When the checkbox is clicked it gradually increases from the ground. Meaning, its y position increases gradually.


### User Interface & Orbit Controls:
I added the DAT Gui library, which is a user interface that allows us to interact with our 3d scene and the objects within it. Using DAT Gui users can zoom in and zoom out in the scene.  I used tween js to change the camera position smoothly when we run zoom in and zoom out functions. Also, I added a "See Clouds" checkbox to make the GLSL screen optional to the user. When the user checks the box it becomes visible, also, they can turn it off.

I added orbit controls for the user to change the camera position wherever they wanted. Orbit controls allow the camera to orbit around a target, in my scene the target is the spaceship and the user can rotate the camera around it. 

### Sound

I added audio using the Maximilian library. It plays when the project runs to make the experience better.

Resources: 
* https://thebookofshaders.com/13/
* https://threejs.org/docs/#api/en/core/Raycaster 
* https://github.com/tweenjs/tween.js/
* https://threejs.org/

