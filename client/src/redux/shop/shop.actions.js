import ShopActionType from './shop.types';

import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
	type: ShopActionType.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};
