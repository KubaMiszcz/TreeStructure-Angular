import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'app-tree-node-rename',
  templateUrl: './tree-node-rename.component.html',
  styleUrls: ['./tree-node-rename.component.css']
})
export class TreeNodeRenameComponent implements OnInit {
  name: string = 'aaa';

  constructor(public dialogRef: MatDialogRef<TreeNodeRenameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.name = data.name;
  }

  ngOnInit() {
  }

  save() {
    console.log("zz" + this.name);
    this.dialogRef.close(this.name);
  }
}

