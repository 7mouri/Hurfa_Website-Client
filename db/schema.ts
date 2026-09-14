import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const assets = sqliteTable('customizer_assets', {
  id: text('id').primaryKey(),
  kind: text('kind', { enum: ['model', 'image'] }).notNull(),
  key: text('object_key').notNull().unique(),
  mime: text('mime').notNull(),
  size: integer('size').notNull(),
  metadata: text('metadata').notNull(),
  createdAt: text('created_at').notNull(),
});

export const samples = sqliteTable('customizer_samples', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  kind: text('kind', { enum: ['wood', 'fabric'] }).notNull(),
  config: text('config').notNull(),
  active: integer('active').notNull().default(1),
  revision: integer('revision').notNull().default(1),
  updatedAt: text('updated_at').notNull(),
});

export const rooms = sqliteTable('customizer_rooms', {
  productId: text('product_id').primaryKey(),
  modelAssetId: text('model_asset_id').references(() => assets.id),
  config: text('config').notNull(),
  revision: integer('revision').notNull().default(1),
  updatedAt: text('updated_at').notNull(),
});
