﻿module egret3d {

     /**
     * @language zh_CN
     * @class egret3d.TerrainMaterial
     * @classdesc
     * 地形材质。
     * @version Egret 3.0
     * @platform Web,Native
     */
    export class TerrainMaterial extends MaterialBase {
        /**
         * @language zh_CN
         * 创建一个新的 TerrainMaterial 对象。
         * @version Egret 3.0
         * @platform Web,Native
         * @param colormap {TextureBase}
         * @param controlTex {TextureBase}
         * @param splat_0 {TextureBase}
         * @param splat_1 {TextureBase}
         * @param splat_2 {TextureBase}
         * @param splat_3 {TextureBase}
         * @param lightMap {TextureBase}
         */
        constructor(colormap: TextureBase, controlTex: TextureBase, splat_0: TextureBase, splat_1: TextureBase, splat_2: TextureBase, splat_3: TextureBase,lightMap:TextureBase=null) {

            super();
            this.materialData.matType = MaterialType.RGBATERRAIN ;
            this.materialData.diffuseTex = colormap;
            this.materialData.maskTex = controlTex;
            this.materialData.splat_0Tex = splat_0;
            this.materialData.splat_1Tex = splat_1;
            this.materialData.splat_2Tex = splat_2;
            this.materialData.splat_3Tex = splat_3;

            if (!lightMap)
                this.materialData.lightMapTex = CheckerboardTexture.texture;
            else
                this.materialData.lightMapTex = lightMap ;

            this.initMatPass();
        }

        /**
         * @language zh_CN
         * 设置 UVTitling。
         * @version Egret 3.0
         * @platform Web,Native
         * @param index {Number}
         * @param x {Number}
         * @param y {Number}
         */
        public setUVTitling(index: number, x: number, y: number) {
            (<TerrainMethod>this.diffusePass.diffuseMethod).setUVTitling(index, x, y);
        }

    }
}