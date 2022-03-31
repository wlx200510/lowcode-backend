import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, Connection, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';
@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
    private connection: Connection,
  ) {}

  async fetchAll(): Promise<ProjectEntity[]> {
    return await this.projectRepository.find();
  }

  async fetchOne(id): Promise<ProjectEntity> {
    return await getRepository(ProjectEntity).findOne({ where: { id } });
  }

  async create(data: Omit<ProjectEntity, 'id'>): Promise<ProjectEntity> {
    return await this.projectRepository.save(data);
  }

  async update(id, data: ProjectEntity) {
    const u = await getRepository(ProjectEntity).findOne({ where: { id } });
    if (!u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'id must be exist.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.projectRepository.save(data);
  }

  async remove(id: number) {
    const u = await getRepository(ProjectEntity).findOne({ where: { id } });
    return this.projectRepository.remove(u);
  }
}
