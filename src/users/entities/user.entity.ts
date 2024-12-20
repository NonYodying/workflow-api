// user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'  
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    username: string;

    @Column({
      nullable: true
    })
    

    @Column()
    password: string;
    
    @Column()
    role: Role;
}

