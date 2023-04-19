import {generateFiles, joinPathFragments, Tree} from '@nrwl/devkit';
import {classify, dasherize} from '@nrwl/workspace/src/utils/strings';
import {Schema} from './schema';

/**
 * Génération d'un service
 *
 * @param {Tree} tree
 * @param {Schema} schema
 * @returns {void}
 */
export default function service(tree: Tree, schema: Schema): void {

    // Destination pour génération
    const dest = schema.path;

    // Fichiers selon type de service
    const files = `files/${schema.type}`;

    // Surchage avec les templates personnalisés
    generateFiles(
        tree,
        joinPathFragments(__dirname, files),
        dest,
        {
            // Fonctions utiles dans le template
            dasherize,
            classify,
            // Enlever le suffixe __template__ des fichiers
            template: '',
            // Variables utiles dans le templates
            ...schema,
            'name@dasherize': dasherize(schema.name),
            'type@dasherize': dasherize(schema.type),
        }
    );
}


