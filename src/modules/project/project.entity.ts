import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  projectType: string;

  @Column('text')
  projectDesc: string;

  @Column('varchar')
  projectName: string;

  @Column('json')
  renderData: string;
}
