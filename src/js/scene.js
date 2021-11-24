// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AmbientLight, Scene } from 'three'
import { component } from 'bidello'
import Cube from './cube/cube'
import camera from './camera'

class Stage extends component(Scene) {
  init() {
    this.add(new AmbientLight())
    this.add(new Cube())
    this.add(camera)
  }
}

export default new Stage()