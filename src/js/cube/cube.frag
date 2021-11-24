precision highp float;

uniform vec3 colorA;
uniform vec3 colorB;
varying float vForce;

void main() {
  gl_FragColor = vec4(mix(colorA, colorB, vForce), 1.0);
}