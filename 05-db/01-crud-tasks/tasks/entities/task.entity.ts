import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 255 })
  title: string

  @Column({ type: 'text'})
  description: string

  @Column({ type: 'boolean', default: false, name: 'is_completed' })
  isCompleted: boolean
}
