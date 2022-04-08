import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

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

  @CreateDateColumn({
    type: 'timestamp',
    name: 'createTime',
    default: () => 'CURRENT_TIMESTAMP(6)',
    comment: '创建时间',
  })
  createTime: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'updateTime',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    comment: '更新时间',
  })
  updateTime: Date;
}
