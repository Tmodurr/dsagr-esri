
import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'


const ZOOM = 16
const BASEMAP = 'arcgis-navigation'

// export const app: any = {
// 	nearbyLayerView: null
// }

export async function initialize(container: HTMLDivElement) {
	const map = new ArcGISMap({
		basemap: BASEMAP,
	})

	const view = new MapView({
		map,
		container,
		center: [-118, 34],
		zoom: 4
	})

	app.view = view

	await view.when()

	return view.when()
}