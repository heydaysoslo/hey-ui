import React from 'react';
import { aspect, CloudinaryNode } from '../../types';
declare type Props = {
    node: CloudinaryNode;
    aspectRatio?: aspect;
};
declare const CloudinaryImage: React.FC<Props>;
export default CloudinaryImage;
