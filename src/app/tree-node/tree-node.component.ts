import { TreeNodeRenameComponent } from './tree-node-rename/tree-node-rename.component';
import { ITreeNode, TreeNode } from './../models/itree-node';
import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit, ITreeNode {
  @Input() name: string;
  @Input() level: number;
  @Input() childrens: ITreeNode[] = [];
  id: number;
  spacersNumber: number[];
  isShowChildrens: boolean;
  @Output() childDelete: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();

  constructor(private dialog: MatDialog) {
    this.name = 'no name';
    this.level = 0;
    this.isShowChildrens = true;
  }

  openDialogRenameChild() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = { name: this.name };
    let dialogRef = this.dialog.open(TreeNodeRenameComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      this.name = value;
      console.log("Dialog sent: " + value);
    });
  }

  ngOnInit() {
    this.spacersNumber = Array.from(Array(this.level * 1 + 1).keys());
    // console.log(this.name + ' ' + this.level + ' ' + this.spacersNumber.length);
  }

  renameChild(): void {
    this.name += this.level;
  }

  moveChild(): void {
  }

  addChild(): void {
    let newChild = new TreeNodeComponent(null);
    newChild.level = this.level + 1;
    newChild.name = "newNode" + Math.floor(Math.random() * 100);
    // console.log(ccc);
    this.childrens.push(newChild);
    console.log(this);
  }

  deleteChild(): void {
    this.childDelete.emit(this);
  }

  toggleShowChildrens(): void {
    this.isShowChildrens = !this.isShowChildrens;
  }

  onChildDelete(node: ITreeNode): void {
    // console.log('ddd' + node.name);
    let x = this.childrens.find(z => z.name === node.name);
    this.childrens = this.childrens.filter(item => item.name !== node.name)
    //console.log('ddd' + x);
  }
}

