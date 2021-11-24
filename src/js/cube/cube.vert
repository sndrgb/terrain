precision highp float;

attribute vec3 normal;
attribute vec3 position;

uniform sampler2D uTrail;
uniform mat3 normalMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying float vForce;

float quarticOut(float t) {
  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

void main() {
  vec4 clipSpace = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vec2 uv = ((clipSpace.xy / clipSpace.w) + 1.0) / 2.0;
  float pointer = texture2D(uTrail, uv).r;
  vec4 pos = modelMatrix * vec4(position, 1.0);

  float force = quarticOut(pointer);
  vForce = force;

  vec3 norm = normalMatrix * normal;
  pos.rgb += (norm * force) * .5;

  gl_Position = projectionMatrix * viewMatrix * pos;
}