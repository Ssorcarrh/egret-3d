﻿module egret3d {
        
    /**
    * @private
    */
    export class ParticleRotationNode extends AnimationNode {

        public rotation: ValueShape = new ConstRandomValueShape();

        private attribute_Rotation: GLSL.VarRegister
        constructor() {

            super();
            this.name = "ParticleRotationNode"; 
            this.vertex_ShaderName = "particle_Rotation";

            this.attribute_Rotation = new GLSL.VarRegister();
            this.attribute_Rotation.name = "attribute_Rotation";
            this.attribute_Rotation.size = 1;
            this.attributes.push(this.attribute_Rotation);

            (<ConstRandomValueShape>this.rotation).min = -300;
            (<ConstRandomValueShape>this.rotation).max = 300;

        }

        public build(geometry: Geometry, count: number) {
            var index: number = 0;
            var vertices: number = geometry.vertexCount / count;
            var data: any[] = this.rotation.calculate(count);
        
            for (var i: number = 0; i < count; ++i) {
                var rot: number = data[i] ; 
                for (var j: number = 0; j < vertices; ++j) {
                    index = i * vertices + j;
                    index = index * geometry.vertexAttLength + this.attribute_Rotation.offsetIndex;
                   
                    geometry.verticesData[index + 0] = rot;
                }
            }

        }
    }
} 