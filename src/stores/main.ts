import { defineStore } from 'pinia'
import { initialize } from '@/common/map'
import type MapView from '@arcgis/core/views/MapView'

interface AppState {
  currentUser?: any
  items: any[]
}

const defaultState: AppState = { items: [] }

let view: MapView

export const useAppStore = defineStore({
  id: 'app',
  state: () => (defaultState),
  actions: {
    async createMap(mapContainer: HTMLDivElement) {
      if (mapContainer) {
        view = await initialize(mapContainer)
      }
    },
  },
})