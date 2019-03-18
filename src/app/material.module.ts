
import { NgModule } from '@angular/core';

import { MatDialogModule, MatFormFieldModule, MatButtonModule, 
  MatInputModule,  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [MatToolbarModule,FormsModule, MatDialogModule,  MatCardModule,
    MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule {}