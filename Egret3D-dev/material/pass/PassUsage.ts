﻿module egret3d_dev {

     /**
     * @private
     * @class egret3d_dev.MethodUsageData
     * @classdesc
     * 方法中需要用到的数据。
     * @version Egret 3.0
     * @platform Web,Native
     */
    export class PassUsage {

        /**
         * @language zh_CN
         */
        public passNeedReset: boolean = true; 
        
        /**
         * @language zh_CN
         */
        public uniform_1ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        public uniform_1fvs: Array<GLSL.Uniform>;

        /**
         * @language zh_CN
         */
        public uniform_2ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        public uniform_2fvs: Array<GLSL.Uniform>;

        /**
         * @language zh_CN
         */
        public uniform_3ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        public uniform_3fvs: Array<GLSL.Uniform>;

        /**
         * @language zh_CN
         */
        public uniform_4ivs: Array<GLSL.Uniform>;
        /**
         * @language zh_CN
         */
        public uniform_4fvs: Array<GLSL.Uniform>;
        //---------------------------------------------
        //---------------------------------------------
        /**
         * @language zh_CN
         */
        public attribute_position: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_offset: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_boneIndex: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_boneWeight: GLSL.Attribute;

        //---------------------------------------------
        //---------------[particle]--------------------
        public attribute_rotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_acceleRotate: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_scale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_acceleScale: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_speed: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_acceleSpeed: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public attribute_startSpaceLifeTime: GLSL.Attribute;
        //---------------------------------------------
        //---------------------------------------------

        /**
         * @language zh_CN
         */
        public uniform_time: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_cameraMatrix: GLSL.Uniform;

        /**
         * @language zh_CN
         */
        public varying_pos: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_normal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_tangent: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_color: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_uv0: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_uv1: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_eyeNormal: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public varying_eyedir: GLSL.Attribute;
        /**
         * @language zh_CN
         */
        public TBN: GLSL.Attribute;
        
        /**
         * @language zh_CN
         */
        public uniform_ModelMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_ProjectionMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_normalMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_shadowMatrix: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_eyepos: GLSL.Uniform;
        
        /**
         * @language zh_CN
         */
        public uniform_PoseMatrix: GLSL.Uniform;

        /**
         * @language zh_CN
         */
        public uniform_sceneWidth: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_sceneHeight: GLSL.Uniform;

        /**
         * @language zh_CN
         */
        public sampler2DList: Array<GLSL.Sampler2D> = new Array<GLSL.Sampler2D>(); 
        /**
         * @language zh_CN
         */
        public sampler3DList: Array<GLSL.Sampler3D> = new Array<GLSL.Sampler3D>(); 

        /**
         * @language zh_CN
         */
        public uniform_materialSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_LightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_lightModelSource: GLSL.Uniform;

        /**
         * @language zh_CN
         */
        public uniform_directLightSource:GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_sportLightSource: GLSL.Uniform;
        /**
         * @language zh_CN
         */
        public uniform_pointLightSource:GLSL.Uniform ;
        /**
         * @language zh_CN
         */
        public uniform_skyLightSource: GLSL.Uniform;

        //----------------------------------------------
        //----------------------------------------------
        /**
         * @language zh_CN
         */
        public program3D: Program3D;
        /**
         * @language zh_CN
         */
        public vs_shader: Shader;
        /**
         * @language zh_CN
         */
        public fs_shader: Shader;
        //----------------------------------------------

        public vertexShaderRegister: vertex;
   


        public methodList: Array<MethodBase> = new Array<MethodBase>();
        public methodDatas: Array<MethodData> = new Array<MethodData>();

        public vsShaderNames: Array<string> = new Array<string>();
        public fsShaderNames: Array<string> = new Array<string>();

        /**
         * @language zh_CN
         */
        public dispose() {
        }

    }
}