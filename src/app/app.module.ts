import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeNodeRenameComponent } from './tree-node/tree-node-rename/tree-node-rename.component';
import { SpacerComponent } from './spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent,
    SpacerComponent,
    TreeNodeRenameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TreeNodeRenameComponent]

})
export class AppModule { }



