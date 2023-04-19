/**
 * Schema
 */
export interface Schema {

    /**
     * Nom du service
     */
    name: string;

    /**
     * Chemin pour génération
     */
    path?: string;

    /**
     * Nom du projet
     */
    project?: string;

    /**
     * Type de service
     */
    type?: 'std' | 'api';

    /**
     * Nom de la ressource
     */
    ressource?: string;
}
