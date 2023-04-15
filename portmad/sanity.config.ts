import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { colorInput } from "@sanity/color-input";

const projectId = process.env.REACT_PUBLIC_SANITY_PROJECT;
const dataset = process.env.REACT_PUBLIC_SANITY_DATASET;


export default defineConfig({
  name: 'default',
  title: 'portmad',

  projectId: 'iaihswwu',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),colorInput()],

  schema: {
    types: schemaTypes,
  },
})
