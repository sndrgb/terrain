import {
  Object3D,
  RawShaderMaterial,
  BoxBufferGeometry,
  Mesh,
  ShaderMaterial,
  Color
} from 'three'

import { component } from 'bidello'
import trail from '/src/js/utils/trail'
import fragmentShader from './cube.frag'
import vertexShader from './cube.vert'

export default class extends component(Object3D) {
  init() {
    this.geometry = new BoxBufferGeometry(3, 3, 3, 18, 18, 18)
    this.material = new RawShaderMaterial({
      wireframe: true,
      name: 'Cube',
      vertexShader,
      fragmentShader,
      uniforms: {
        uTrail: { value: trail.fbo.target },
        colorA: { value: new Color(0x00ff00) },
        colorB: { value: new Color(0xff0000) }
      }
    })

    // this.material = new MeshStandardMaterial()
    this.mesh = new Mesh(this.geometry, this.material)

    this.add(this.mesh)
  }

  onRaf({ delta }) {
    this.mesh.rotation.x += 0.3 * delta
    this.mesh.rotation.y += 0.3 * delta
    // this.material.uniforms.uTrail.value = trail.target
  }
}