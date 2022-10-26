import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum TodoStatus {
  NEW,
  IN_PROGRESS,
  COMPLETE,
}

// enumを使用する際に、下記メソッドでの登録が必要
// TODO registerEnumTypeの挙動を確認する
registerEnumType(TodoStatus, {
  name: 'ToDoStatus',
});

@ObjectType()
export class Todo {
  // graphql上のID型として定義
  // TODO ID型の挙動を確認
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  // null許容の場合、Fieldに下記定義が必要
  @Field({ nullable: true })
  description;

  @Field((type) => TodoStatus)
  status: TodoStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
