export interface ITreeNode {
  id: number;
  level: number;
  name: string;
  childrens: ITreeNode[];
}

export class TreeNode implements ITreeNode {
  id: number;
  level: number;
  name: string;
  childrens: ITreeNode[];
}
