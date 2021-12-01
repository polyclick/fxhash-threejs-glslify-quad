import { Clock, Mesh, OrthographicCamera, PlaneBufferGeometry, Scene, ShaderMaterial, Vector2, WebGLRenderer } from 'three'

import vertexShader from './default.vert'
import fragmentShader from './default.frag'

export default class App {

  constructor() {
    this.setup()
    this.draw()
  }


  ///////////////////////////////////////////////////////////////////////////////
  //// SETUP
  ///////////////////////////////////////////////////////////////////////////////

  setup() {

    // Clock
    this.clock = new Clock()
    this.clock.start()

    // Scene
    this.scene = new Scene()

    // Camera
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)
    this.scene.add(this.camera)

    // Renderer
    this.renderer = new WebGLRenderer({ antialias: false })
    this.renderer.setClearColor(0x000000)
    document.body.appendChild(this.renderer.domElement)


    // FXHash Features
    //
    // window.$fxhashFeatures = {
    //   'Prop 1': 'Awesome',    // String
    //   'Prop 2': 1337          // Number
    //   'Prop 3': true          // Boolean example
    // }


    // Quad
    this.quad = new Mesh(
      new PlaneBufferGeometry(2, 2, 1, 1),
      new ShaderMaterial({
        uniforms: {
          time: { value: this.clock.getElapsedTime() },
          res: { value: new Vector2() }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
      })
    )

    this.scene.add(this.quad)


    // Resize handler & trigger it once
    window.addEventListener(`resize`, () => this.handleResize())
    this.handleResize()
  }


  ///////////////////////////////////////////////////////////////////////////////
  //// DRAW
  ///////////////////////////////////////////////////////////////////////////////

  draw() {
    requestAnimationFrame(() => this.draw())

    this.quad.material.uniforms.time.value = this.clock.getElapsedTime()

    this.renderer.render(this.scene, this.camera)
  }


  ///////////////////////////////////////////////////////////////////////////////
  //// EVENT HANDLERS
  ///////////////////////////////////////////////////////////////////////////////

  handleResize() {
    const size = Math.min(window.innerWidth, window.innerHeight)

    this.renderer.setSize(size, size)

    this.quad.material.uniforms.res.value = new Vector2(size, size)

    // TODO: Update any render target sizes here
    // ...
  }

}